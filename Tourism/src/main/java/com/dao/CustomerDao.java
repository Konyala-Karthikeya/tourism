package com.dao;

import java.util.List;
import java.util.Random;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.model.Customer;
import com.ts.config.TwilioConfig;

@Service
public class CustomerDao {

	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	private JavaMailSender mailSender;
	
	// Hash the password using BCrypt
    private String hashPassword(String plainTextPassword) {
        return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());
    }
    
    public Customer addCustomer(Customer customer) {
		sendWelcomeEmail(customer);
		customer.setPassword(hashPassword(customer.getPassword()));
		Customer savedCustomer = customerRepository.save(customer); 
		return savedCustomer;
	}
	
    private void sendWelcomeEmail(Customer customer) {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(customer.getEmailId());
            message.setSubject("Welcome to Explore-ERA");
            message.setText("Dear " + customer.getUserName() + ",\n\n"
                    + "Thank you for registering ");

            mailSender.send(message);
        
    }
    
    public Customer getCustomerByEmail(String emailId) {
		return customerRepository.findByEmail(emailId);
	}
    
    public Customer customerLogin(String emailId, String password) {
		Customer customer = customerRepository.findByEmail(emailId);
		if (customer != null && BCrypt.checkpw(password, customer.getPassword())) {
	        return customer;
	    } else {
			return null;
	    }
	}
    
    public Customer getCustomerById(int customerId){
    	return customerRepository.findById(customerId).orElse(null);
    }
    
    public Customer getCustomerByName(String userName){
    	return customerRepository.findByName(userName);
    }
    
    public List<Customer> getCustomers() {
		return customerRepository.findAll();
	}

	public Customer updateCustomer(Customer customer) {
		if(customerRepository.findById(customer.getCustomerId()) != null)return customerRepository.save(customer);
		else {
			return null;
		}
	}

	public void deleteCustomerById(int customerId) {
		customerRepository.deleteById(customerId);
	}
}
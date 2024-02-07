package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Customer {

	@Id
	@GeneratedValue
	private int customerId;
	private String userName;
	private String gender;
	private String phoneNumber;
	@Column(unique=true)
	private String emailId;
	private String country;
	private String password;
	private String confirmPassword;
	private String otp;
	
	public Customer() {
		
	}

	public Customer(String userName, String gender, String phoneNumber, String emailId, String country,
			String password, String confirmPassword, String otp) {
		this.userName = userName;
		this.gender = gender;
		this.phoneNumber = phoneNumber;
		this.emailId = emailId;
		this.country = country;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.otp = otp;
	}

	public Customer(int customerId, String userName, String gender, String phoneNumber, String emailId, String country,
			String password, String confirmPassword, String otp) {
		super();
		this.customerId = customerId;
		this.userName = userName;
		this.gender = gender;
		this.phoneNumber = phoneNumber;
		this.emailId = emailId;
		this.country = country;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.otp = otp;
	}

	public int getCustomerId() {
		return customerId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public String getOtp() {
		return otp;
	}

	public void setOtp(String otp) {
		this.otp = otp;
	}
		
}
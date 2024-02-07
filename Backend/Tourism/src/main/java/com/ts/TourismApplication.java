package com.ts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.ts.config.TwilioConfig;

@EnableJpaRepositories(basePackages="com.dao")
@EntityScan(basePackages="com.model")
@SpringBootApplication(scanBasePackages="com")
@Import(TwilioConfig.class)
public class TourismApplication {

	public static void main(String[] args) {
		SpringApplication.run(TourismApplication.class, args);
	}

}

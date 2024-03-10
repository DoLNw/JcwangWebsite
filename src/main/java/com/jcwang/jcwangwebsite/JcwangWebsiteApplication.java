package com.jcwang.jcwangwebsite;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

@MapperScan(basePackages = "com.jcwang.jcwangwebsite.dao")
public class JcwangWebsiteApplication {

    public static void main(String[] args) {
        SpringApplication.run(JcwangWebsiteApplication.class, args);
    }

}

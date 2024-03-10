package com.jcwang.jcwangwebsite.controller;

import com.jcwang.jcwangwebsite.dao.UserDao;
import com.jcwang.jcwangwebsite.model.AntApiResult;
import com.jcwang.jcwangwebsite.model.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import java.util.List;

@Controller
//@CrossOrigin
public class AntDesignController {
//    /**
//     * 配置url通配符，拦截多个地址
//     * @return
//     */
//    @RequestMapping(value = {
//            "/",
//            "/user",
//            "/user/**",
//            "/console",
//            "/console/**"
//    })
//    public String fowardIndex() {
//        return "index";
//    }

    @Autowired
    private UserDao userDao;

    @RequestMapping("/api/currentUser")
    @ResponseBody
    public AntApiResult currentUser(HttpServletRequest request, HttpServletResponse response){
        List<User> allUsers = userDao.getAllUsers();
        allUsers.forEach(System.out::println);

        User user = new User("王嘉诚", "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
                "00000001", "antdesign@alipay.com",
                "海纳百川，有容乃大", "交互专家", "蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED");
        return new AntApiResult(true, user);
    }

//    @RequestMapping()
//    public String allIndex(){
//        return "index";
//    }
}



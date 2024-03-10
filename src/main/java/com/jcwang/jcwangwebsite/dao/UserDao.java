package com.jcwang.jcwangwebsite.dao;


import com.jcwang.jcwangwebsite.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
public interface UserDao {
    @Select("select * from users")
    List<User> getAllUsers();

}

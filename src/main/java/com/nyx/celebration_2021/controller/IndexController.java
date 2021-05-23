package com.nyx.celebration_2021.controller;


import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {


    /**
     * 最初のメッセージを返却する
     *
     * @return {@code "Hello World!"}
     */
    @GetMapping(path = "/", produces = MediaType.ALL_VALUE)
    public String index() {
        return "celebration/index";
    }

}

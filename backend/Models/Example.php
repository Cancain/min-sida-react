<?php

class Example extends Database{
    private $db;

    public function __construct(){
        $this->db = new Database();
    }

    public function sayHello() {
        return 'Hello World!';
    }
}
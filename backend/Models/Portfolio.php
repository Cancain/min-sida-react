<?php

class Portfolio extends Database{
    private $db;

    public function __construct(){
        $this->sb = new Database();
    }

    public function hello(){
        return 'Hello there';
    }
}
<?php

class Portfolio extends Database{
    private $db;

    public function __construct(){
        $this->db = new Database();
    }

    public function hello(){
        return 'Hello there';
    }

    public function getAllPortfolio(){
        $this->db->query('SELECT * FROM portfolio');

        $data = $this->db->fetchMultiple();
        $data = json_encode($data);
        return $data;
    }
}
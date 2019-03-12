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

        $data = [
            'portfolio' => $this->db->fetchMultiple(),
            'links' => ''            
        ];

        $this->db->query('SELECT * FROM links');

        $data = [
            'portfolio' => $data['portfolio'],
            'links' => $this->db->fetchMultiple()            
        ];
        $data = json_encode($data);
        return $data;
    }
}
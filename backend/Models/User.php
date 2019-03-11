<?php

class User extends Database {
    private $db;

    public function __construct(){
        $this->db = new Database;
    }

    public function getUserByEmail($email){
        $this->db->query('SELECT * 
                            FROM users
                            WHERE email = :email');
        
        $this->db->bind('email', $email);

        $data = $this->db->fetchSingle();

        if($data){
            return $data;
        } else {
            return false;
        }
        
    }

    public function test($data){
        echo var_dump($data);
    }
}
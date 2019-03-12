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

    public function addPortfolio($data){
        $this->db->query('INSERT INTO portfolio(title, body)
                            VALUES (:title, :body)');
        $this->db->bind('title', $data['title']);
        $this->db->bind('body', $data['body']);

        $this->db->execute();


        echo $data['body'];
        echo $data['title'];
        echo var_dump($data['links']);

    }
}
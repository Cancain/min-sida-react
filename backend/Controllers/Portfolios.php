<?php


class Portfolios extends Controller{
    public function __construct(){
        $this->portfolioModel = $this->model('Portfolio');
    }

    public function getAllPortfolios(){
        $data = $this->portfolioModel->hello();
        echo $data;
    }
}


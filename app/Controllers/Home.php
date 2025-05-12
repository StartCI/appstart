<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        if(file_exists('nuxt/dist/index.html')) {
            die(file_get_contents('nuxt/dist/index.html'));
        }else{
            return $this->response->redirect($_ENV['DDEV_PRIMARY_URL'].':3001');
        }
    }
}

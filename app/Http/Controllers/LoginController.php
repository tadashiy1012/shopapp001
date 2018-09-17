<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller {

    public function getState(Request $req) {
        $name = $req->session()->get('name');
        return ['ok', 'LoginController@getState', ['name' => $name]];
    }

    public function login(Request $req) {
        $name = $req->name;
        $password = $req->password;
        $user = User::where('name', $name)->first();
        if ($user && $user->password === $password) {
            $req->session()->put('name', $user->name);
            return ['ok', 'LoginController@login'];
        } else {
            return ['ng', 'LoginController@login'];
        }
    }

    public function logout(Request $req) {
        $req->session()->forget('name');
        return ['ok', 'LoginController@logout'];
    }

}
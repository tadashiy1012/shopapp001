<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/login', 'LoginController@getState');
Route::post('/login', 'LoginController@login');
Route::post('/logout', 'LoginController@logout');

Route::post('/register', 'RegistController@registUser');

Route::get('/item', 'ItemController@getAll');
Route::get('/item/latest', 'ItemController@getLatest');
Route::get('/item/{id}', 'ItemController@getOne');
Route::put('/item', 'ItemController@update');
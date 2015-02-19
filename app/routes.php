<?php



/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
Route::get('/menudos', array('as' => 'menudos','uses'=>'HomeController@menudos'));

Route::get('/generatemenu', array('as' => 'generatemenu','uses'=>'HomeController@generatemenu'));
Route::get('/menucreator', array('as' => 'menucreator','uses'=>'HomeController@menucreator'));
Route::get('/menu', array('as' => 'menu','uses'=>'HomeController@menu'));
Route::get('/widgetcreator', array('as' => 'widgetcreator','uses'=>'HomeController@widgetcreator'));
Route::post('/getwidgetinformation', array('as' => 'getwidgetinformation','uses'=>'HomeController@getwidgetinformation'));
Route::get('/deletewidget', array('as' => 'deletewidget','uses'=>'HomeController@deletewidget'));
Route::get('/menupreview' , 'HomeController@menupreview');
Route::get('/getallmenus', array('as' => 'getallmenus','uses'=>'HomeController@getallmenus'));
Route::get('/deletemenu', array('as' => 'deletemenu','uses'=>'HomeController@deletemenu'));
Route::post('/menupost', array('as' => 'menupost','uses'=>'HomeController@menupost'));
Route::post('/updatemenus', array('as' => 'updatemenus','uses'=>'HomeController@updatemenus'));
Route::post('/createmenu', array('as' => 'createmenu','uses'=>'HomeController@createmenu'));
Route::post('/createwidget', array('as' => 'createwidget','uses'=>'HomeController@createwidget'));
Route::post('/menudeletepost', array('as' => 'menudeletepost','uses'=>'HomeController@menudeletepost'));

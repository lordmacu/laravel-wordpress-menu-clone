<?php

class HomeController extends BaseController {

	/*
	 |--------------------------------------------------------------------------
	 | Default Home Controller
	 |--------------------------------------------------------------------------
	 |
	 | You may wish to use controllers instead of, or in addition to, Closure
	 | based routes. That's great! Here is an example controller method to
	 | get you started. To route to this controller, just add the route:
	 |
	 |	Route::get('/', 'HomeController@showWelcome');
	 |
	 */

	 public function menudos(){
	 	return View::make('menudos');
	 }
	public function deletemenu() {
		$menus = new MenuItem();
		$getall = $menus -> getall(Input::get("m"));
		if (count($getall) == 0) {
			$menudelete = Menu::find(Input::get("m"));
			$menudelete -> delete();
			return Redirect::route("menucreator", array("resp" => "has been deleted successfully"));
		} else {
			return Redirect::route("menucreator", array("resp" => "You have to delete all items first"));
		}
	}

	public function createmenu() {
		$menu = new Menu();
		$menu -> name = Input::get("name");
		$menu -> save();
		return Redirect::route("menucreator");
	}

	public function menucreator() {
		$menu = Menu::all();
		return View::make('menucreator') -> with("menus", $menu);
	}

	public function getwidgetinformation() {

		$widget = Widget::find(Input::get("id"));

		return $widget -> toJson();
	}

	public function createwidget() {

		if (Input::has("idwidget")) {
			$widget = Widget::find(Input::get("idwidget"));
		} else {
			$widget = new Widget();
		}
		$widget -> name = Input::get("name");
		$widget -> description = Input::get("widgeteditor");
		$widget -> save();
		return Redirect::route("widgetcreator");

	}

	public function widgetcreator() {
		$widget = Widget::all();

		return View::make('widgetcreator') -> with("widgets", $widget); ;
	}

	function buildMenu($parent, $menu) {
		$array = array();
		$contador = 0;
		if (isset($menu['parents'][$parent])) {
			foreach ($menu['parents'][$parent] as $itemId) {
				if (!isset($menu['parents'][$itemId])) {
					$array[$contador] = $menu['items'][$itemId];
				}
				if (isset($menu['parents'][$itemId])) {
					$array[$contador] = $menu['items'][$itemId];

					$array[$contador]["hijos"] = $this -> buildMenu($itemId, $menu);
				}
				$contador++;
			}
		}
		return $array;
	}

	public function deletewidget() {

		$widget = Widget::find(Input::get("id"));
		$widget -> delete();
		return Redirect::route("widgetcreator", array("resp" => "has been deleted successfully"));
	}

	public function insertardata($data, $padre) {
		foreach ($data as $in) {
			$menu = new MenuItem();
			$menufind = MenuItem::find($in["id"]);
			if (count($menufind) != 1) {
				$menu -> id = $in["id"];
				$menu -> label = $in["label"];
				$menu -> link = $in["link"];
				$menu -> class = $in["class"];
				$menu -> sort = $in["sort"];
				$menu -> parent = $padre;
				$menu -> save();
				if (isset($in["hijos"])) {
					$this -> insertardata($in["hijos"], $menu -> id);
				}
			}

		}

	}

	public function getallmenus() {
		$menuliist = MenuItem::where("menu", Input::get("menu")) -> orderBy("label", "asc") -> lists("label", "id");
		$menuliist[0] = "Select parent";
		$html = '	<label for="label">MenuItem</label>';
		$html .= Form::select('parent', $menuliist, Input::get("parent"), array("class" => "form-control", "id" => "parentselect"));
		return $html;
	}

	public function updatemenus() {
		if (Input::get("id") == 0) {
			$menu = new MenuItem();
			if (Input::has("label")) {
				$menu -> label = Input::get("label");
			}
			if (Input::has("class")) {
				$menu -> class = Input::get("class");

			}
			if (Input::has("link")) {
				$menu -> link = Input::get("link");
			}
			if (Input::has("parent")) {
				if (Input::get("parent") != "") {
					$menu -> parent = Input::get("parent");
				} else {
					$menu -> parent = 0;
				}
			}
			$menu -> sort = 0;
			echo $menu -> save();
		} else {
			$menu = Menu::find(Input::get("id"));
			if (Input::has("label")) {
				$menu -> label = Input::get("label");
			}
			if (Input::has("parent")) {
				$menu -> parent = Input::get("parent");
			}
			if (Input::has("class")) {
				$menu -> class = Input::get("class");
			}
			if (Input::has("link")) {
				$menu -> link = Input::get("link");
			}
			$menu -> save();
		}

	}

	public function menudeletepost() {
		$menumodel = new MenuItem();
		$sons = $menumodel -> getsons(Input::get("id"));
		if (count($sons) == 0) {
			$menub = MenuItem::find(Input::get("id"));
			$menub -> delete();
			echo json_encode(array("resp" => "This item has been deleted successfully", "error" => 2));
		} else {
			echo json_encode(array("resp" => "This menu item has children, delete them first.", "error" => 1));
		}

	}

	public function generarmenu($menus) {
		$html = '<style>  .infolist{ display:block !important}</style>';
		foreach ($menus as $menu) {
			$menustring = explode(" ", $menu['class']);

			if (!isset($menustring[1])) {
				$menustring[1] = "";
			}
			if (!isset($menustring[0])) {
				$menustring[0] = "";
			}
			if ($menustring[0] == "submenumega") {
				$html .= '<div class="' . $menustring[1] . '">';
			}
			$html .= '<li id="menuitem_' . $menu['id'] . '"  data-class="' . $menu['class'] . '" data-sort="' . $menu['sort'] . '" data-link="' . $menu['link'] . '"  data-label="' . $menu['label'] . '" data-id="' . $menu['id'] . '">';
			if ($menustring[0] == "submenumega") {
				$html .= '<span>' . $menu['label'] . ' </span>';
			} else {
				$html .= '<a href="' . $menu['link'] . '" class="sf-with-ul">' . $menu['label'] . ' </a>';
			}
			if ($menustring[0] == "sf-megas") {
				$html .= '<div class="sf-mega"><div class="sf-mega-content"><div class="row">';
			}
			if (isset($menu["hijos"])) {
				if ($menustring[0] == "sf-megas") {
					$html .= '<ul >';

				} else {
					if ($menustring[0] == "submenumega") {
						$html .= '<ul  class="infolist">';

					} else {
						$html .= '<ul class="dd-list">';
					}
				}
				$html .= $this -> generarmenu($menu["hijos"]);
				$html .= '</ul>';
			}
			if ($menustring[0] == "sf-megas") {
				$html .= '</div></div></div>';
			}
			if ($menustring[0] == "submenumega") {
				$html .= '</div>';
			}
			$html .= '</li>';
		}
		return $html;
	}

	public function generatemenu() {

		$menu = new MenuItem();
		$getall = $menu -> getall(1);
		$menu = array('items' => array(), 'parents' => array());
		foreach ($getall as $key => $items) {
			$menu['items'][$items['id']] = $items -> toArray();
			$menu['parents'][$items['parent']][] = $items -> id;
		}
		$items = $this -> buildMenu(0, $menu);
		$menufind = Menu::find(Input::get("id"));

		$widget = new Widget();

		$widgetbymenu = $widget -> getWidgetByMenu(Input::get("id"));
		if ($widgetbymenu -> count()) {
			$widget = Widget::find($widgetbymenu[0] -> id);
		}
		
		$widget -> name = $menufind -> name;
		$widget->id_component=Input::get("id"); 
		$widget -> description = $this -> generarmenu($items);
		$widget -> save();

	}

	public function menupreview() {
		$menu = new MenuItem();
		$getall = $menu -> getall(1);
		$menu = array('items' => array(), 'parents' => array());
		foreach ($getall as $key => $items) {
			$menu['items'][$items['id']] = $items -> toArray();
			$menu['parents'][$items['parent']][] = $items -> id;
		}
		$items = $this -> buildMenu(0, $menu);

		//	echo $this->generarmenu($items);
		return View::make('menupreview') -> with("menus", $items); ;
	}

	public function menupost() {
		DB::table('menu_items') -> delete();
		$this -> insertardata(Input::get("jsondata"), 0);
	}

	public function menu() {
		$menu = new MenuItem();
		$getall = $menu -> getall(Input::get("m"));
		$menu = array('items' => array(), 'parents' => array());
		foreach ($getall as $key => $items) {
			$menu['items'][$items['id']] = $items -> toArray();
			$menu['parents'][$items['parent']][] = $items -> id;
		}
		$items = $this -> buildMenu(0, $menu);
		return View::make('menu') -> with("menus", $items);
	}

	public function showWelcome() {
		return View::make('hello');
	}

}

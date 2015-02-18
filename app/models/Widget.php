<?php

class Widget extends Eloquent {

	public function getWidgetByMenu($id) {
		return $this -> where("id_component", $id) -> get();
	}

}

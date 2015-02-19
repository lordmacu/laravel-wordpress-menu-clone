<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" class="wp-toolbar" lang="es-MX">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

		<title>Menús ‹ Aviasur — WordPress</title>
		<script type="text/javascript">
			var ajaxurl = '/wp-admin/admin-ajax.php',
			    pagenow = 'nav-menus',
			    typenow = '',
			    adminpage = 'nav-menus-php',
			    thousandsSeparator = '.',
			    decimalPoint = ',',
			    isRtl = 0;
		</script>
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<link href="{{asset('menu/style.css')}}" rel="stylesheet">
		<link href="{{asset('menu/thickbox.css')}}" rel="stylesheet">
		<script type="text/javascript">
			function w3tc_popupadmin_bar(url) {
				return window.open(url, '', 'width=800,height=600,status=no,toolbar=no,menubar=no,scrollbars=yes');
			}
		</script><style type="text/css"></style>

		<script type="text/javascript">
			/* <![CDATA[ */

			var menus = {
				"oneThemeLocationNoMenus" : "",
				"moveUp" : "Mover uno arriba",
				"moveDown" : "Mover uno abajo",
				"moveToTop" : "Mover a la primera posici\u00f3n",
				"moveUnder" : "Mover detr\u00e1s de %s",
				"moveOutFrom" : "Sacarlo de debajo de %s",
				"under" : "Detr\u00e1s de %s",
				"outFrom" : "Sacar %s",
				"menuFocus" : "%1$s. Elemento de men\u00fa %2$d de %3$d.",
				"subMenuFocus" : "%1$s. N\u00famero de subelemento %2$d de %3$s."
			};
			/* ]]> */
		</script>
		<script type="text/javascript" src="{{asset('menu/scripts.js')}}"></script>

	</head>
	<body class="wp-admin wp-core-ui js   jetpack-disconnected  menu-max-depth-0 nav-menus-php auto-fold admin-bar branch-4-1 version-4-1 admin-color-fresh locale-es-mx customize-support svg" cz-shortcut-listen="true">

		<div id="wpwrap">
			<a tabindex="1" href="http://aero.bogotac.com/wp-admin/nav-menus.php?action=edit&menu=26#wpbody-content" class="screen-reader-shortcut">Saltar al contenido principal</a>

			<div id="wpcontent">

				<div id="wpbody">

					<div id="wpbody-content" aria-label="Contenido principal" tabindex="0" style="overflow: hidden;">

						<div class="wrap">
							<h2 class="nav-tab-wrapper"><a href="http://aero.bogotac.com/wp-admin/nav-menus.php" class="nav-tab nav-tab-active">Editar Menús</a><a href="http://aero.bogotac.com/wp-admin/nav-menus.php?action=locations" class="nav-tab">Gestionar lugares</a></h2>
							<div class="manage-menus">
								<form method="get" action="http://aero.bogotac.com/wp-admin/nav-menus.php">
									<input type="hidden" name="action" value="edit">
									<label for="menu" class="selected-menu">Elige el menú que quieras editar:</label>
									<select name="menu" id="menu">
										<option value="25"> Categories </option>
										<option value="26" selected="selected"> Landing Page Navigation Menus </option>
										<option value="24"> Main Navigation Menu (Main Navigation Menu, Landing Page Navigation Menu) </option>
									</select>
									<span class="submit-btn">
										<input type="submit" class="button-secondary" value="Elegir">
									</span>
									<span class="add-new-menu-action"> o <a href="http://aero.bogotac.com/wp-admin/nav-menus.php?action=edit&menu=0">crea un nuevo menú</a>. </span><!-- /add-new-menu-action -->
								</form>
							</div><!-- /manage-menus -->
							<div id="nav-menus-frame">
								<div id="menu-settings-column" class="metabox-holder">

									<div class="clear"></div>

									<form id="nav-menu-meta" action="" class="nav-menu-meta" method="post" enctype="multipart/form-data">
										<div id="side-sortables" class="accordion-container">
											<ul class="outer-border">
												<li class="control-section accordion-section  open add-page" id="add-page">
													<h3 class="accordion-section-title hndle" tabindex="0"> Páginas <span class="screen-reader-text">Pulsa retorno o enter para ampliar</span></h3>
													<div class="accordion-section-content ">
														<div class="inside">
															<div id="posttype-page" class="posttypediv">
																<ul id="posttype-page-tabs" class="posttype-tabs add-menu-item-tabs">
																	<li class="tabs">
																		<a class="nav-tab-link" data-type="tabs-panel-posttype-page-most-recent" href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&page-tab=most-recent#tabs-panel-posttype-page-most-recent"> Más reciente </a>
																	</li>
																	<li>
																		<a class="nav-tab-link" data-type="page-all" href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&page-tab=all#page-all"> Ver todo </a>
																	</li>
																	<li>
																		<a class="nav-tab-link" data-type="tabs-panel-posttype-page-search" href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&page-tab=search#tabs-panel-posttype-page-search"> Buscar </a>
																	</li>
																</ul><!-- .posttype-tabs -->

																<div id="tabs-panel-posttype-page-most-recent" class="tabs-panel tabs-panel-active">
																	<ul id="pagechecklist-most-recent" class="categorychecklist form-no-clear">
																		@for($i=0;$i<10;$i++)
																		<li>
																			<label class="menu-item-title">
																				<input type="checkbox" class="menu-item-checkbox" name="menu-item[-1][menu-item-object-id]" value="428">
																				ORDEN AL MERITO</label>

																		</li>
																		@endfor
																	</ul>
																</div><!-- /.tabs-panel -->

																<div class="tabs-panel tabs-panel-inactive" id="tabs-panel-posttype-page-search">
																	<p class="quick-search-wrap">
																		<input type="search" class="quick-search input-with-default-title" title="Buscar" value="" name="quick-search-posttype-page" autocomplete="off">
																		<span class="spinner" style="display: none;"></span>
																		<input type="submit" name="submit" id="submit-quick-search-posttype-page" class="button button-small quick-search-submit hide-if-js" value="Buscar">
																	</p>

																	<ul id="page-search-checklist" data-wp-lists="list:page" class="categorychecklist form-no-clear"></ul>
																</div><!-- /.tabs-panel -->

																<div id="page-all" class="tabs-panel tabs-panel-view-all tabs-panel-inactive">
																	<ul id="pagechecklist" data-wp-lists="list:page" class="categorychecklist form-no-clear">
																		@for($i=0;$i<10;$i++)

																		<li>
																			<label class="menu-item-title">
																				<input type="checkbox" class="menu-item-checkbox add-to-top" name="menu-item[-10][menu-item-object-id]" value="245">
																				Inicio: A post with audio</label>

																		</li>
																		@endfor

																	</ul>
																</div><!-- /.tabs-panel -->

																<p class="button-controls">
																	<span class="list-controls"> <a href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&page-tab=all&selectall=1#posttype-page" class="select-all">Seleccionar todos</a> </span>

																	<span class="add-to-menu">
																		<input type="submit" class="button-secondary submit-add-to-menu right" value="Añadir al menú" name="add-post-type-menu-item" id="submit-posttype-page">
																</p>

															</div><!-- /.posttypediv -->
														</div><!-- .inside -->
													</div><!-- .accordion-section-content -->
												</li><!-- .accordion-section -->
												<li class="control-section accordion-section hide-if-js  add-post" id="add-post">
													<h3 class="accordion-section-title hndle" tabindex="0"> Entradas <span class="screen-reader-text">Pulsa retorno o enter para ampliar</span></h3>
													<div class="accordion-section-content ">
														<div class="inside">
															<div id="posttype-post" class="posttypediv">
																<ul id="posttype-post-tabs" class="posttype-tabs add-menu-item-tabs">
																	<li class="tabs">
																		<a class="nav-tab-link" data-type="tabs-panel-posttype-post-most-recent" href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&post-tab=most-recent#tabs-panel-posttype-post-most-recent"> Más reciente </a>
																	</li>
																	<li>
																		<a class="nav-tab-link" data-type="post-all" href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&post-tab=all#post-all"> Ver todo </a>
																	</li>
																	<li>
																		<a class="nav-tab-link" data-type="tabs-panel-posttype-post-search" href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&post-tab=search#tabs-panel-posttype-post-search"> Buscar </a>
																	</li>
																</ul><!-- .posttype-tabs -->

																<div id="tabs-panel-posttype-post-most-recent" class="tabs-panel tabs-panel-active">
																	<ul id="postchecklist-most-recent" class="categorychecklist form-no-clear">
																		@for($i=0;$i<10;$i++)
																		<li>
																			<label class="menu-item-title">
																				<input type="checkbox" class="menu-item-checkbox" name="menu-item[-20][menu-item-object-id]" value="432">
																				Quienes Somos</label>
																		</li>
																		@endfor
																	</ul>
																</div><!-- /.tabs-panel -->

																<div class="tabs-panel tabs-panel-inactive" id="tabs-panel-posttype-post-search">
																	<p class="quick-search-wrap">
																		<input type="search" class="quick-search input-with-default-title" title="Buscar" value="" name="quick-search-posttype-post" autocomplete="off">
																		<span class="spinner"></span>
																		<input type="submit" name="submit" id="submit-quick-search-posttype-post" class="button button-small quick-search-submit hide-if-js" value="Buscar">
																	</p>

																	<ul id="post-search-checklist" data-wp-lists="list:post" class="categorychecklist form-no-clear"></ul>
																</div><!-- /.tabs-panel -->

																<div id="post-all" class="tabs-panel tabs-panel-view-all tabs-panel-inactive">
																	<ul id="postchecklist" data-wp-lists="list:post" class="categorychecklist form-no-clear">
																		@for($i=0;$i<10;$i++)
																		<li>
																			<label class="menu-item-title">
																				<input type="checkbox" class="menu-item-checkbox" name="menu-item[-27][menu-item-object-id]" value="361">
																				Empresa Colombiana de Aviónica (E.C.A)</label>
																		</li>
																		@endfor
																	</ul>
																</div><!-- /.tabs-panel -->

																<p class="button-controls">
																	<span class="list-controls"> <a href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&post-tab=all&selectall=1#posttype-post" class="select-all">Seleccionar todos</a> </span>

																	<span class="add-to-menu">
																		<input type="submit" class="button-secondary submit-add-to-menu right" value="Añadir al menú" name="add-post-type-menu-item" id="submit-posttype-post">
																		<span class="spinner"></span> </span>
																</p>

															</div><!-- /.posttypediv -->
														</div><!-- .inside -->
													</div><!-- .accordion-section-content -->
												</li><!-- .accordion-section -->

												<li class="control-section accordion-section   add-custom-links" id="add-custom-links">
													<h3 class="accordion-section-title hndle" tabindex="0"> Enlaces <span class="screen-reader-text">Pulsa retorno o enter para ampliar</span></h3>
													<div class="accordion-section-content ">
														<div class="inside">
															<div class="customlinkdiv" id="customlinkdiv">
																<p id="menu-item-url-wrap">
																	<label class="howto" for="custom-menu-item-url"> <span>URL</span>
																		<input id="custom-menu-item-url" name="menu-item[-64][menu-item-url]" type="text" class="code menu-item-textbox" value="http://">
																	</label>
																</p>

																<p id="menu-item-name-wrap">
																	<label class="howto" for="custom-menu-item-name"> <span>Enlace de texto</span>
																		<input id="custom-menu-item-name" name="menu-item[-64][menu-item-title]" type="text" class="regular-text menu-item-textbox input-with-default-title" title="Elemento del menú">
																	</label>
																</p>

																<p class="button-controls">
																	<span class="add-to-menu">
																		<input type="submit" class="button-secondary submit-add-to-menu right" value="Añadir al menú" name="add-custom-menu-item" id="submit-customlinkdiv">
																</p>

															</div><!-- /.customlinkdiv -->
														</div><!-- .inside -->
													</div><!-- .accordion-section-content -->
												</li><!-- .accordion-section -->
												<li class="control-section accordion-section   add-category" id="add-category">
													<h3 class="accordion-section-title hndle" tabindex="0"> Categorías <span class="screen-reader-text">Pulsa retorno o enter para ampliar</span></h3>
													<div class="accordion-section-content ">
														<div class="inside">
															<div id="taxonomy-category" class="taxonomydiv">
																<ul id="taxonomy-category-tabs" class="taxonomy-tabs add-menu-item-tabs">
																	<li class="tabs">
																		<a class="nav-tab-link" data-type="tabs-panel-category-pop" href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&category-tab=most-used#tabs-panel-category-pop"> Más utilizadas </a>
																	</li>
																	<li>
																		<a class="nav-tab-link" data-type="tabs-panel-category-all" href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&category-tab=all#tabs-panel-category-all"> Ver todo </a>
																	</li>
																	<li>
																		<a class="nav-tab-link" data-type="tabs-panel-search-taxonomy-category" href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&category-tab=search#tabs-panel-search-taxonomy-category"> Buscar </a>
																	</li>
																</ul><!-- .taxonomy-tabs -->

																<div id="tabs-panel-category-pop" class="tabs-panel tabs-panel-active">
																	<ul id="categorychecklist-pop" class="categorychecklist form-no-clear">
																		<li>
																			<label class="menu-item-title">
																				<input type="checkbox" class="menu-item-checkbox" name="menu-item[-65][menu-item-object-id]" value="1">
																				Uncategorized</label>
																		</li>
																	</ul>
																</div><!-- /.tabs-panel -->

																<div id="tabs-panel-category-all" class="tabs-panel tabs-panel-view-all tabs-panel-inactive">
																	<ul id="categorychecklist" data-wp-lists="list:category" class="categorychecklist form-no-clear">
																		@for($i=0;$i<10;$i++)
																		<li>
																			<label class="menu-item-title">
																				<input type="checkbox" class="menu-item-checkbox" name="menu-item[-66][menu-item-object-id]" value="2">
																				App</label>
																		</li>
																		@endfor
																	</ul>
																</div><!-- /.tabs-panel -->

																<div class="tabs-panel tabs-panel-inactive" id="tabs-panel-search-taxonomy-category">
																	<p class="quick-search-wrap">
																		<input type="search" class="quick-search input-with-default-title" title="Buscar" value="" name="quick-search-taxonomy-category" autocomplete="off">
																		<span class="spinner"></span>
																		<input type="submit" name="submit" id="submit-quick-search-taxonomy-category" class="button button-small quick-search-submit hide-if-js" value="Buscar">
																	</p>

																	<ul id="category-search-checklist" data-wp-lists="list:category" class="categorychecklist form-no-clear"></ul>
																</div><!-- /.tabs-panel -->

																<p class="button-controls">
																	<span class="list-controls"> <a href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&category-tab=all&selectall=1#taxonomy-category" class="select-all">Seleccionar todos</a> </span>

																	<span class="add-to-menu">
																		<input type="submit" class="button-secondary submit-add-to-menu right" value="Añadir al menú" name="add-taxonomy-menu-item" id="submit-taxonomy-category">
																		<span class="spinner"></span> </span>
																</p>

															</div><!-- /.taxonomydiv -->
														</div><!-- .inside -->
													</div><!-- .accordion-section-content -->
												</li><!-- .accordion-section -->
												<li class="control-section accordion-section hide-if-js  add-post_tag" id="add-post_tag">
													<h3 class="accordion-section-title hndle" tabindex="0"> Etiquetas <span class="screen-reader-text">Pulsa retorno o enter para ampliar</span></h3>
													<div class="accordion-section-content ">
														<div class="inside">
															<div id="taxonomy-post_tag" class="taxonomydiv">
																<ul id="taxonomy-post_tag-tabs" class="taxonomy-tabs add-menu-item-tabs">
																	<li class="tabs">
																		<a class="nav-tab-link" data-type="tabs-panel-post_tag-pop" href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&post_tag-tab=most-used#tabs-panel-post_tag-pop"> Más utilizadas </a>
																	</li>
																	<li>
																		<a class="nav-tab-link" data-type="tabs-panel-post_tag-all" href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&post_tag-tab=all#tabs-panel-post_tag-all"> Ver todo </a>
																	</li>
																	<li>
																		<a class="nav-tab-link" data-type="tabs-panel-search-taxonomy-post_tag" href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&post_tag-tab=search#tabs-panel-search-taxonomy-post_tag"> Buscar </a>
																	</li>
																</ul><!-- .taxonomy-tabs -->

																<div id="tabs-panel-post_tag-pop" class="tabs-panel tabs-panel-active">
																	<ul id="post_tagchecklist-pop" class="categorychecklist form-no-clear"></ul>
																</div><!-- /.tabs-panel -->

																<div class="tabs-panel tabs-panel-inactive" id="tabs-panel-search-taxonomy-post_tag">
																	<p class="quick-search-wrap">
																		<input type="search" class="quick-search input-with-default-title" title="Buscar" value="" name="quick-search-taxonomy-post_tag" autocomplete="off">
																		<span class="spinner"></span>
																		<input type="submit" name="submit" id="submit-quick-search-taxonomy-post_tag" class="button button-small quick-search-submit hide-if-js" value="Buscar">
																	</p>

																	<ul id="post_tag-search-checklist" data-wp-lists="list:post_tag" class="categorychecklist form-no-clear"></ul>
																</div><!-- /.tabs-panel -->

																<p class="button-controls">
																	<span class="list-controls"> <a href="http://aero.bogotac.com/wp-admin/nav-menus.php?menu=26&post_tag-tab=all&selectall=1#taxonomy-post_tag" class="select-all">Seleccionar todos</a> </span>

																	<span class="add-to-menu">
																		<input type="submit" class="button-secondary submit-add-to-menu right" value="Añadir al menú" name="add-taxonomy-menu-item" id="submit-taxonomy-post_tag">
																		<span class="spinner"></span> </span>
																</p>

															</div><!-- /.taxonomydiv -->
														</div><!-- .inside -->
													</div><!-- .accordion-section-content -->
												</li><!-- .accordion-section -->
											</ul><!-- .outer-border -->
										</div><!-- .accordion-container -->
									</form>

								</div><!-- /#menu-settings-column -->
								<div id="menu-management-liquid">
									<div id="menu-management">
										<form id="update-nav-menu" action="" method="post" enctype="multipart/form-data">
											<div class="menu-edit ">
												<div id="nav-menu-header">
													<div class="major-publishing-actions">
														<label class="menu-name-label howto open-label" for="menu-name"> <span>Nombre del menú</span>
															<input name="menu-name" id="menu-name" type="text" class="menu-name regular-text menu-item-textbox" title="Introduce el nombre del menú aquí." value="Landing Page Navigation Menus">
														</label>
														<div class="publishing-action">
															<input type="submit" name="save_menu" id="save_menu_header" class="button button-primary menu-save" value="Guardar menú">
														</div><!-- END .publishing-action -->
													</div><!-- END .major-publishing-actions -->
												</div><!-- END .nav-menu-header -->
												<div id="post-body">
													<div id="post-body-content">
														<h3>Estructura del Menú</h3>
														<div class="drag-instructions post-body-plain" style="">
															<p>
																Coloca cada elemento en el orden que prefieras. Haz click en la flecha que hay a la derecha del elemento para mostrar más opciones de configuración.
															</p>
														</div>
														<div id="menu-instructions" class="post-body-plain menu-instructions-inactive">
															<p>
																Añade elementos de menú desde la columna de la izquierda.
															</p>
														</div>
														<ul class="menu ui-sortable" id="menu-to-edit">

															@for($i=1;$i<10;$i++)
															<li id="menu-item-{{$i}}" class="menu-item menu-item-depth-0 menu-item-page menu-item-edit-inactive pending" style="display: list-item;">
																<dl class="menu-item-bar">
																	<dt class="menu-item-handle">
																		<span class="item-title"><span class="menu-item-title">Home {{$i}}</span> <span class="is-submenu" style="display: none;">subelemento</span></span>
																		<span class="item-controls"> <span class="item-type">Página</span> <span class="item-order hide-if-js"> <a href="http://aero.bogotac.com/wp-admin/nav-menus.php?action=move-up-menu-item&menu-item={{$i}}&_wpnonce=8b3eb7ac44" class="item-move-up"><abbr title="Mover arriba">↑</abbr></a> | <a href="http://aero.bogotac.com/wp-admin/nav-menus.php?action=move-down-menu-item&menu-item={{$i}}&_wpnonce=8b3eb7ac44" class="item-move-down"><abbr title="Mover abajo">↓</abbr></a> </span> <a class="item-edit" id="edit-{{$i}}" title="Home. Elemento de menú 1 de 4." href="http://aero.bogotac.com/wp-admin/nav-menus.php?edit-menu-item={{$i}}#menu-item-settings-{{$i}}">Home. Elemento de menú 1 de 4.</a> </span>
																	</dt>
																</dl>

																<div class="menu-item-settings" id="menu-item-settings-{{$i}}">
																	<p class="description description-thin">
																		<label for="edit-menu-item-title-{{$i}}"> Etiqueta de navegación
																			<br>
																			<input type="text" id="edit-menu-item-title-{{$i}}" class="widefat edit-menu-item-title" name="menu-item-title[{{$i}}]" value="Home">
																		</label>
																	</p>
																	<p class="description description-thin">
																		<label for="edit-menu-item-attr-title-{{$i}}"> Atributos del título
																			<br>
																			<input type="text" id="edit-menu-item-attr-title-{{$i}}" class="widefat edit-menu-item-attr-title" name="menu-item-attr-title[{{$i}}]" value="">
																		</label>
																	</p>
																	<p class="field-link-target description ">
																		<label for="edit-menu-item-target-{{$i}}">
																			<input type="checkbox" id="edit-menu-item-target-{{$i}}" value="_blank" name="menu-item-target[{{$i}}]">
																			Abrir enlace en una nueva ventana/pestaña </label>
																	</p>
																	<p class="field-css-classes description description-thin">
																		<label for="edit-menu-item-classes-{{$i}}"> Clases CSS (opcional)
																			<br>
																			<input type="text" id="edit-menu-item-classes-{{$i}}" class="widefat code edit-menu-item-classes" name="menu-item-classes[{{$i}}]" value="">
																		</label>
																	</p>
																	<p class="field-xfn description description-thin ">
																		<label for="edit-menu-item-xfn-{{$i}}"> Relación con el enlace (XFN)
																			<br>
																			<input type="text" id="edit-menu-item-xfn-{{$i}}" class="widefat code edit-menu-item-xfn" name="menu-item-xfn[{{$i}}]" value="">
																		</label>
																	</p>
																	<p class="field-description description description-wide ">
																		<label for="edit-menu-item-description-{{$i}}"> Descripción
																			<br>
																			<textarea id="edit-menu-item-description-{{$i}}" class="widefat edit-menu-item-description" rows="3" cols="20" name="menu-item-description[{{$i}}]"></textarea> <span class="description">La descripción se mostrará en los menús si el tema actual lo soporta.</span> </label>
																	</p>

																	<p class="field-move hide-if-no-js description description-wide">
																		<label> <span>Mover</span> <a href="http://aero.bogotac.com/wp-admin/nav-menus.php?action=edit&menu=26#" class="menus-move-up" style="display: none;">Uno hacia arriba</a> <a href="http://aero.bogotac.com/wp-admin/nav-menus.php?action=edit&menu=26#" class="menus-move-down" title="Mover uno abajo" style="display: inline;">Uno hacia abajo</a> <a href="http://aero.bogotac.com/wp-admin/nav-menus.php?action=edit&menu=26#" class="menus-move-left" style="display: none;"></a> <a href="http://aero.bogotac.com/wp-admin/nav-menus.php?action=edit&menu=26#" class="menus-move-right" style="display: none;"></a> <a href="http://aero.bogotac.com/wp-admin/nav-menus.php?action=edit&menu=26#" class="menus-move-top" style="display: none;">A la parte superior</a> </label>
																	</p>

																	<div class="menu-item-actions description-wide submitbox">
																		<p class="link-to-original">
																			Original: <a href="http://aero.bogotac.com/?page_id=288">Home</a>
																		</p>
																		<a class="item-delete submitdelete deletion" id="delete-{{$i}}" href="http://aero.bogotac.com/wp-admin/nav-menus.php?action=delete-menu-item&menu-item={{$i}}&_wpnonce=2844002501">Eliminar</a><span class="meta-sep hide-if-no-js"> | </span><a class="item-cancel submitcancel hide-if-no-js" id="cancel-{{$i}}" href="http://aero.bogotac.com/wp-admin/nav-menus.php?edit-menu-item={{$i}}&cancel=1424297719#menu-item-settings-{{$i}}">Cancelar</a>
																	</div>

																</div><!-- .menu-item-settings-->
																<ul class="menu-item-transport"></ul>
															</li>
															@endfor

														</ul>
														<div class="menu-settings">

														</div>
													</div><!-- /#post-body-content -->
												</div><!-- /#post-body -->
												<div id="nav-menu-footer">
													<div class="major-publishing-actions">
														<span class="delete-action"> <a class="submitdelete deletion menu-delete" href="http://aero.bogotac.com/wp-admin/nav-menus.php?action=delete&menu=26&0=http%3A%2F%2Faero.bogotac.com%2Fwp-admin%2F&_wpnonce=1976e94fe7">Eliminar menú</a> </span><!-- END .delete-action -->
														<div class="publishing-action">
															<input type="submit" name="save_menu" id="save_menu_header" class="button button-primary menu-save" value="Guardar menú">
														</div><!-- END .publishing-action -->
													</div><!-- END .major-publishing-actions -->
												</div><!-- /#nav-menu-footer -->
											</div><!-- /.menu-edit -->
										</form><!-- /#update-nav-menu -->
									</div><!-- /#menu-management -->
								</div><!-- /#menu-management-liquid -->
							</div><!-- /#nav-menus-frame -->
						</div><!-- /.wrap-->

						<div class="clear"></div>
					</div><!-- wpbody-content -->

					<div class="clear"></div>
				</div><!-- wpbody -->
				<div class="clear"></div>
			</div><!-- wpcontent -->

			<script type="text/javascript">
				var _wpmejsSettings = {
					"pluginPath" : "\/wp-includes\/js\/mediaelement\/"
				};
				var _wpMediaViewsL10n = {
					"url" : "URL",

					"settings" : {

						"captions" : true,
						"nonce" : {
							"sendToEditor" : "7c063fd4ce"
						},
						"post" : {
							"id" : 0
						},
						"embedExts" : ["mp3", "ogg", "wma", "m4a", "wav", "mp4", "m4v", "webm", "ogv", "wmv", "flv"],

						"contentWidth" : 662,

						"mediaTrash" : 0
					}
				};
				var imageEditL10n = {
					"error" : "No se puede cargar la previsualizaci\u00f3n de la imagen. Por favor, recarga la p\u00e1gina y prueba de nuevo."
				};
				var heartbeatSettings = {
					"nonce" : "8f49a798f6"
				};
				var authcheckL10n = {
					"beforeunload" : "Tu sesi\u00f3n ha caducado. Puedes identificarte otra vez desde esta p\u00e1gina o ir a la p\u00e1gina de identificaci\u00f3n.",
					"interval" : "180"
				};
				var thickboxL10n = {
					"next" : "Siguiente >",
					"prev" : "< Anterior",
					"image" : "Imagen",
					"of" : "de",
					"close" : "Cerrar",
					"noiframes" : "Esta funci\u00f3n requiere de frames insertados. Tienes los iframes desactivados o tu navegador no los soporta.",
					"loadingAnimation" : "http:\/\/aero.bogotac.com\/wp-includes\/js\/thickbox\/loadingAnimation.gif"
				};
				/* ]]> */
			</script>
			<script type="text/javascript" src="{{asset('menu/scripts2.js')}}"></script>

			<div class="clear"></div>
		</div><!-- wpwrap -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
		<script type="text/javascript">
			if ( typeof wpOnload == 'function')
				wpOnload();

			function getmenus() {

				var arraydata = [];
				$("#menu-to-edit li").each(function(index) {
					var dept = 0;
					for (var i = 0; i < 20; i++) {

						var n = $(this).attr("class").indexOf("menu-item-depth-" + i);

						if (n != -1) {
							dept = i;
						}
					};
					var id = this.id.split("-");

					arraydata.push({
						profundidad : dept,
						id : id[2]
					})

				});

				verificarpadres(arraydata);

			}

			var arraygeneral = [];
			function verificarpadres(arraydata) {

				var arrayotro = [];

				for (var j = 0; j < arraydata.length; j++) {
					var arrayremporal = [];
					arrayremporal["padre"] = arraydata[j];


							var hijos=[];
							
							
							 for (var i=0; i < 10; i++) {
							 
							
					if (!!arraydata[j + i]) {
						if ((arraydata[j].profundidad < arraydata[j + i].profundidad)) {

							hijos.push(arraydata[j + i]);
						}
						arrayotro.push(arrayremporal);
					}
					 };
					arrayremporal["hijo"] =hijos;
					

				};
				arraygeneral.push(arrayotro);

				console.log(arraygeneral);
				/*
				 console.log("padre "+arraydata[j].id)
				 for (var o = 1; o < arraydata.length; o++) {

				 var temporaldos=[];

				 if (arraydata[j].profundidad > arraydata[j + o].profundidad) {

				 console.log(arraydata[j]);

				 console.log(arraydata[j + o]);

				 }

				 };
				 */

			}
		</script>

	</body>
</html>
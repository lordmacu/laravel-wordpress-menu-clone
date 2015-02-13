<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  	
  	<script>
  		function createmenu(){
  			$("#myModal").modal("show")
  		}
  	</script>
  	<div class="container">
  		
  
  	<div class="row" style="text-align: center;margin-top: 40px;margin-bottom: 40px">
  		@if(Input::has("resp"))
  		<div class="well">
  			{{Input::get("resp")}}
  		</div>
  		@endif
  		<button class="btn btn-default" onclick="createmenu()">Create menu</button>
  	</div>
    <div class="bs-example" data-example-id="bordered-table">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th class="col-lg-1">#</th>
          <th class="col-lg-8">Name</th>
       	  <th class="col-lg-3"></th>
        </tr>
      </thead>
      <tbody>
      	@foreach($menus as $m)
        <tr>
          <th scope="row">{{$m->id}}</th>
          <td>{{$m->name}}</td>
      	  <th><a class="btn btn-default" href="{{route('menu',array('m'=>$m->id))}}">Edit</a> <a href="{{route('deletemenu',array('m'=>$m->id))}}" class="btn btn-danger">Delete</a> </th>
        </tr>
        @endforeach
      </tbody>
    </table>
  </div>
	</div>
	
	<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    	<form action="{{route('createmenu')}}" method="post">
    		
    
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Create Menu</h4>
      </div>
      <div class="modal-body">
        <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    	<input type="text" name="name" class="form-control"   placeholder="Name">
  	</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Create</button>
      </div>
      	</form>
    </div>
  </div>
</div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
  </body>
</html>
<template>
  <div>
    <nav class="navbar navbar-fixed-top navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#" @click="goToIndex">hucheng1997的博客</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#" data-toggle="modal" data-target="#myModal">联系我</a></li>
          </ul>
        </div><!-- /.nav-collapse -->
      </div><!-- /.container -->
    </nav><!-- /.navbar -->

    <div class="container">

      <div class="row row-offcanvas row-offcanvas-right">

        <div class="col-xs-12 col-sm-9">
          <p class="pull-right visible-xs">
            <button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
          </p>
          <div class="jumbotron">
            <h1>Hello, world!</h1>
            <p>This is an example to show the potential of an offcanvas
              layout pattern in Bootstrap. Try some responsive-range viewport sizes to
              see it in action.</p>
          </div>
          <div class="row">
            <div class="col-xs-6 col-lg-4">
              <h2>Heading</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                mollis euismod. Donec sed odio dui. </p>
              <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
            </div><!--/.col-xs-6.col-lg-4-->
            <div class="col-xs-6 col-lg-4">
              <h2>Heading</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                mollis euismod. Donec sed odio dui. </p>
              <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
            </div><!--/.col-xs-6.col-lg-4-->
            <div class="col-xs-6 col-lg-4">
              <h2>Heading</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                mollis euismod. Donec sed odio dui. </p>
              <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
            </div><!--/.col-xs-6.col-lg-4-->
            <div class="col-xs-6 col-lg-4">
              <h2>Heading</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                mollis euismod. Donec sed odio dui. </p>
              <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
            </div><!--/.col-xs-6.col-lg-4-->
            <div class="col-xs-6 col-lg-4">
              <h2>Heading</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                mollis euismod. Donec sed odio dui. </p>
              <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
            </div><!--/.col-xs-6.col-lg-4-->
            <div class="col-xs-6 col-lg-4">
              <h2>Heading</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                mollis euismod. Donec sed odio dui. </p>
              <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
            </div><!--/.col-xs-6.col-lg-4-->
          </div><!--/row-->
        </div><!--/.col-xs-12.col-sm-9-->

        <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
          <div class="list-group">
            <a href="#" class="list-group-item active">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
            <a href="#" class="list-group-item">Link</a>
          </div>
        </div><!--/.sidebar-offcanvas-->
      </div><!--/row-->

      <hr>

      <footer>
        <p><span class="glyphicon glyphicon-user" aria-hidden="true"></span>Create blog by
          <a href="https://www.cnblogs.com/hucheng1997/"> @hucheng1997</a>.
        </p>
      </footer>

    </div>
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header" style="background-color: #9d9d9d">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">联系我</h4>
          </div>
          <div class="modal-body" style="background-color: #9d9d9d">
            <div><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>13243880514</div>
            <div><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>hucheng1997@aliyun.com
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    methods:{
      goToIndex(){
        this.$store.dispatch('goIndex',this.$router)
      }
    }

  }
</script>

<style>
  /*
   * Style tweaks
   * --------------------------------------------------
   */
  html,
  body {
    overflow-x: hidden; /* Prevent scroll on narrow devices */
  }
  body {
    padding-top: 70px;
  }
  footer {
    padding: 30px 0;
  }

  /*
   * Off Canvas
   * --------------------------------------------------
   */
  @media screen and (max-width: 767px) {
    .row-offcanvas {
      position: relative;
      -webkit-transition: all .25s ease-out;
      -o-transition: all .25s ease-out;
      transition: all .25s ease-out;
    }

    .row-offcanvas-right {
      right: 0;
    }

    .row-offcanvas-left {
      left: 0;
    }

    .row-offcanvas-right
    .sidebar-offcanvas {
      right: -50%; /* 6 columns */
    }

    .row-offcanvas-left
    .sidebar-offcanvas {
      left: -50%; /* 6 columns */
    }

    .row-offcanvas-right.active {
      right: 50%; /* 6 columns */
    }

    .row-offcanvas-left.active {
      left: 50%; /* 6 columns */
    }

    .sidebar-offcanvas {
      position: absolute;
      top: 0;
      width: 50%; /* 6 columns */
    }
  }

</style>

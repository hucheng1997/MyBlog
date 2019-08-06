<template>
  <div>
    <div class="site-wrapper">

      <div class="site-wrapper-inner">

        <div class="cover-container">

          <div class="masthead clearfix">
            <div class="inner">
              <h3 class="masthead-brand">hucheng1997的博客</h3>
              <nav>
                <ul class="nav masthead-nav">
                  <li><a href="#" @click="goToHome">主页</a></li>
                  <li><a href="#" data-toggle="modal" data-target="#myModal">联系我</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="inner cover">
            <h1 class="cover-heading">Record my life！</h1>
            <p class="lead">该博客是基于Bootstrap、Vue、SpringBoot，一个前后端分离的小项目，目前功能还待完善
              目前会去爬取我的博客园中的博客作为临时的数据</p>
            <p class="lead">
              <a href="#" class="btn btn-lg btn-default" @click="goToHome">查看我的博客</a>
            </p>

          </div>

          <div class="mastfoot">
            <div class="inner">
              <p><span class="glyphicon glyphicon-user" aria-hidden="true"></span>Create blog by
                <a href="https://www.cnblogs.com/hucheng1997/"> @hucheng1997</a>.
              </p>
            </div>
          </div>

        </div>

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
  </div>
</template>
<script>
  import {mapActions} from 'vuex'

  export default {
    mounted () {
      this.$store.dispatch('reqArticles')
    },
    methods: {
      ...mapActions(['goHome']),
      goToHome () {
        this.goHome(this.$router)
      }

    }
  }
</script>

<style>
  /*
   * Globals
   */

  /* Links */
  a,
  a:focus,
  a:hover {
    color: #fff;
  }

  /* Custom default button */
  .btn-default,
  .btn-default:hover,
  .btn-default:focus {
    color: #333;
    text-shadow: none; /* Prevent inheritance from `body` */
    background-color: #fff;
    border: 1px solid #fff;
  }


  /*
   * Base structure
   */

  html,
  body {
    height: 100%;
    background-image: url("../../static/img/1.jpg");
  }

  body {
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 3px rgba(0, 0, 0, .5);
  }

  /* Extra markup and styles for table-esque vertical and horizontal centering */
  .site-wrapper {
    display: table;
    width: 100%;
    height: 100%; /* For at least Firefox */
    min-height: 100%;
    -webkit-box-shadow: inset 0 0 100px rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 100px rgba(0, 0, 0, .5);
  }

  .site-wrapper-inner {
    display: table-cell;
    vertical-align: top;
  }

  .cover-container {
    margin-right: auto;
    margin-left: auto;
  }

  /* Padding for spacing */
  .inner {
    padding: 30px;
  }


  /*
   * Header
   */
  .masthead-brand {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .masthead-nav > li {
    display: inline-block;
  }

  .masthead-nav > li + li {
    margin-left: 20px;
  }

  .masthead-nav > li > a {
    padding-right: 0;
    padding-left: 0;
    font-size: 16px;
    font-weight: bold;
    color: #fff; /* IE8 proofing */
    color: rgba(255, 255, 255, .75);
    border-bottom: 2px solid transparent;
  }

  .masthead-nav > li > a:hover,
  .masthead-nav > li > a:focus {
    background-color: transparent;
    border-bottom-color: #a9a9a9;
    border-bottom-color: rgba(255, 255, 255, .25);
  }

  .masthead-nav > .active > a,
  .masthead-nav > .active > a:hover,
  .masthead-nav > .active > a:focus {
    color: #fff;
    border-bottom-color: #fff;
  }

  @media (min-width: 768px) {
    .masthead-brand {
      float: left;
      margin-left: -200px;
    }

    .masthead-nav {
      float: right;
    }
  }

  .cover {
    padding: 28% 20px;
  }

  .cover .btn-lg {
    padding: 10px 20px;
    font-weight: bold;
  }


  /*
   * Footer
   */

  .mastfoot {
    color: #999; /* IE8 proofing */
    color: rgba(255, 255, 255, .5);
  }


  /*
   * Affix and center
   */

  @media (min-width: 768px) {
    /* Pull out the header and footer */
    .masthead {
      position: fixed;
      top: 0;
    }

    .mastfoot {
      position: fixed;
      bottom: 0;
    }

    /* Start the vertical centering */
    .site-wrapper-inner {
      vertical-align: middle;
    }

    /* Handle the widths */
    .masthead,
    .mastfoot,
    .cover-container {
      width: 100%; /* Must be percentage or pixels for horizontal alignment */
    }
  }

  @media (min-width: 992px) {
    .masthead,
    .mastfoot,
    .cover-container {
      width: 700px;
    }
  }

</style>

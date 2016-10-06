var LEVIATH = LEVIATH || {};

(function(namespace){

  var Modal = function(){
    this.isOpen         = false;
    this.modalContents  = $("#modal-contents");
    this.modalContainer = $("#modal-container");
    this.modalCloseBtn  = $("#close-modal");
    this.store = $(".re-shop-list");
    this.infoDetail = $(".re-shop-info");
    this.info = albumInfo;

  };

  Modal.prototype.setHtml = function(id){
    var html = $("#modal-inner-contents-" + id).html();
    this.modalContents.html(html);
  }

  Modal.prototype.open = function(id){

    var that = this;
    var overLay = '<div id="modal-overlay"></div>';

    if(!this.isOpen){
      $("body").append(overLay);
      $("#modal-overlay").fadeIn("slow");
      this.modalContainer.fadeIn("slow");
      this._fixBackBody();
      this.setHtml(id);
      this.isOpen = true;
      this.onClickClose();
    }
  }


  Modal.prototype.close = function(){

    var that = this;

    if(this.isOpen){
      this.modalContainer.fadeOut("slow",function(){
        that._staticBackBody();  
      });

      $("#modal-overlay").fadeOut("slow",function(){
        $(this).remove();
      });

      this.isOpen = false;
    }
    
  }

  Modal.prototype._fixBackBody = function(){
    $(".wrap").addClass("wrap-fixed");
  }

  Modal.prototype._staticBackBody = function(){
    $(".wrap").removeClass("wrap-fixed");
    
  }

  Modal.prototype.onClickOpen = function(){
    var that = this;

    $(".modal-open").on("click",function(){
      var id = $(this).attr("data-modal-id");
      that.open(id);
    });
  }

  Modal.prototype.onClickClose = function(){
    var that = this;

    $("#modal-overlay").add(".modal-close").on("click",function(){
      that.close();
    });
  }
  

  namespace.Modal = Modal;

})(LEVIATH);

$(function(){

  LEVIATH_modal = new LEVIATH.Modal();
  LEVIATH_modal.onClickOpen();

});
$(document).ready(function(){
  $("form#mad-lib-form").submit(function(event){
    event.preventDefault();
    for(let i = 1; i < 10; i ++){
      let val = $("input#input-"+i).val();
      $(".mad-lib-story").show();
      $("#mad-lib-form").hide();
      $(".output-"+i).text(val);
    }
    // alert(vals);
    // var userinput1 = $("input#input-1").val();
    // var userinput2 = $("input#input-2").val();
    // var userinput3 = $("input#input-3").val();
    // var userinput4 = $("input#input-4").val();
    // var userinput5 = $("input#input-5").val();
    // var userinput6 = $("input#input-6").val();
    // var userinput7 = $("input#input-7").val();
    // var userinput8 = $("input#input-8").val();
    // var userinput9 = $("input#input-9").val();

    // $(".output-1").text(userinput1);
    // $(".output-2").text(userinput2);
    // $(".output-3").text(userinput3);
    // $(".output-4").text(userinput4);
    // $(".output-5").text(userinput5);
    // $(".output-6").text(userinput6);
    // $(".output-7").text(userinput7);
    // $(".output-8").text(userinput8);
    // $(".output-9").text(userinput9);

    // $(".mad-lib-story").show();
    // $("#mad-lib-form").hide();
  });
});

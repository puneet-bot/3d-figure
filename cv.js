$('.shape').shape();
$('.up').click(function () { 
                
    // Make the shape flip up 
    console.log("cliked");
    $('.shape').shape('flip up'); 
});

    

$('.shape').shape('flip up');
$('.shape')
  .shape('set next side', '.second.side')
  .shape('flip up')
;

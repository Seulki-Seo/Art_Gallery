$(function(){
    const grid=new Isotope(".gallery_wrap", {
        itemSelector:"article",
        columnWidth:"article",
        transitionDuration:"0.5s",
    });

    let btn=$(".menu li");

    btn.eq(0).addClass("on");

    btn.click(function(e){
        e.preventDefault();
        let sort=$(this).find("a").attr("href");

        $(".menu li").removeClass("on");
        $(this).addClass("on");
        
        grid.arrange({
            filter:sort
        });
    });
});
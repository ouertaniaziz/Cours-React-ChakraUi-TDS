import React, { useState, useEffect, useRef } from "react";

export const ScrollTracker = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollableRef = useRef(null);
  console.log(scrollPosition);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollableRef.current.scrollTop;
      const scrollHeight = scrollableRef.current.scrollHeight;
      const clientHeight = scrollableRef.current.clientHeight;
      const scrollPercentage = Math.round(
        (scrollTop / (scrollHeight - clientHeight)) * 100
      );
      setScrollPosition(scrollPercentage);
    };

    scrollableRef.current.addEventListener("scroll", handleScroll);

    return () => {
      scrollableRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={scrollableRef} style={{ height: "200px", overflow: "scroll" }}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Maecenas sit amet lectus vel metus malesuada bibendum.</p>
      <p>Suspendisse lacinia velit id velit consectetur iaculis.</p>
      <p>Proin ut mauris vel felis commodo suscipit at quis orci.</p>
      <p>Vivamus in justo in nisi pharetra finibus ut vel elit.</p>
      <p>
        Etiam vehicula, mi et malesuada dignissim, odio leo luctus urna, ut
        cursus massa orci eget felis.
      </p>
      <p>In hac habitasse platea dictumst.</p>
      <p>
        Nam sodales risus ac nisi iaculis, eget suscipit risus pellentesque.
      </p>
      <p>
        Vestibulum euismod nisl vel dui vestibulum, sit amet bibendum odio
        gravida.
      </p>
      <p>Donec nec nunc eu mauris consectetur auctor in nec ex.</p>
      <p>Integer posuere magna sit amet nibh pulvinar vehicula.</p>
      <p>Nullam gravida erat et lacus bibendum, vitae dictum sapien gravida.</p>
      <p>Nam scelerisque risus in magna luctus, vitae interdum justo congue.</p>
      <p>
        Praesent malesuada tortor nec turpis facilisis, id viverra justo auctor.
      </p>
      <p>
        Curabitur auctor nulla ut neque imperdiet, non fermentum quam vulputate.
      </p>
      <p>
        Suspendisse malesuada nulla a ligula fringilla, ut feugiat nunc
        vestibulum.
      </p>
      <p>Sed imperdiet mauris nec ipsum posuere, vel luctus urna placerat.</p>
      <p>Mauris et sapien in neque vulputate blandit.</p>
      <p>Nam nec orci consequat, viverra risus in, molestie odio.</p>
      <p>Nulla ut lectus eu metus vehicula blandit.</p>
      <p>
        Donec vestibulum urna ut orci tristique, vel dapibus quam ullamcorper.
      </p>
      <p>Pellentesque commodo tellus quis bibendum pretium.</p>
      <p>
        Phasellus vestibulum sapien id orci varius, eu mattis quam vulputate.
      </p>
      <p>Cras et enim nec nulla vestibulum varius eget vitae orci.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Maecenas sit amet lectus vel metus malesuada bibendum.</p>
      <p>Suspendisse lacinia velit id velit consectetur iaculis.</p>
      <p>Proin ut mauris vel felis commodo suscipit at quis orci.</p>
      <p>Vivamus in justo in nisi pharetra finibus ut vel elit.</p>
      <p>
        Etiam vehicula, mi et malesuada dignissim, odio leo luctus urna, ut
        cursus massa orci eget felis.
      </p>
      <p>In hac habitasse platea dictumst.</p>
      <p>
        Nam sodales risus ac nisi iaculis, eget suscipit risus pellentesque.
      </p>
      <p>
        Vestibulum euismod nisl vel dui vestibulum, sit amet bibendum odio
        gravida.
      </p>
      <p>Donec nec nunc eu mauris consectetur auctor in nec ex.</p>
      <p>Integer posuere magna sit amet nibh pulvinar vehicula.</p>
      <p>Nullam gravida erat et lacus bibendum, vitae dictum sapien gravida.</p>
      <p>Nam scelerisque risus in magna luctus, vitae interdum justo congue.</p>
      <p>
        Praesent malesuada tortor nec turpis facilisis, id viverra justo auctor.
      </p>
      <p>
        Curabitur auctor nulla ut neque imperdiet, non fermentum quam vulputate.
      </p>
      <p>
        Suspendisse malesuada nulla a ligula fringilla, ut feugiat nunc
        vestibulum.
      </p>
      <p>Sed imperdiet mauris nec ipsum posuere, vel luctus urna placerat.</p>
      <p>Mauris et sapien in neque vulputate blandit.</p>
      <p>Nam nec orci consequat, viverra risus in, molestie odio.</p>
      <p>Nulla ut lectus eu metus vehicula blandit.</p>
      <p>
        Donec vestibulum urna ut orci tristique, vel dapibus quam ullamcorper.
      </p>
      <p>Pellentesque commodo tellus quis bibendum pretium.</p>
      <p>
        Phasellus vestibulum sapien id orci varius, eu mattis quam vulputate.
      </p>
      <p>Cras et enim nec nulla vestibulum varius eget vitae orci.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Maecenas sit amet lectus vel metus malesuada bibendum.</p>
      <p>Suspendisse lacinia velit id velit consectetur iaculis.</p>
      <p>Proin ut mauris vel felis commodo suscipit at quis orci.</p>
      <p>Vivamus in justo in nisi pharetra finibus ut vel elit.</p>
      <p>
        Etiam vehicula, mi et malesuada dignissim, odio leo luctus urna, ut
        cursus massa orci eget felis.
      </p>
      <p>In hac habitasse platea dictumst.</p>
      <p>
        Nam sodales risus ac nisi iaculis, eget suscipit risus pellentesque.
      </p>
      <p>
        Vestibulum euismod nisl vel dui vestibulum, sit amet bibendum odio
        gravida.
      </p>
      <p>Donec nec nunc eu mauris consectetur auctor in nec ex.</p>
      <p>Integer posuere magna sit amet nibh pulvinar vehicula.</p>
      <p>Nullam gravida erat et lacus bibendum, vitae dictum sapien gravida.</p>
      <p>Nam scelerisque risus in magna luctus, vitae interdum justo congue.</p>
      <p>
        Praesent malesuada tortor nec turpis facilisis, id viverra justo auctor.
      </p>
      <p>
        Curabitur auctor nulla ut neque imperdiet, non fermentum quam vulputate.
      </p>
      <p>
        Suspendisse malesuada nulla a ligula fringilla, ut feugiat nunc
        vestibulum.
      </p>
      <p>Sed imperdiet mauris nec ipsum posuere, vel luctus urna placerat.</p>
      <p>Mauris et sapien in neque vulputate blandit.</p>
      <p>Nam nec orci consequat, viverra risus in, molestie odio.</p>
      <p>Nulla ut lectus eu metus vehicula blandit.</p>
      <p>
        Donec vestibulum urna ut orci tristique, vel dapibus quam ullamcorper.
      </p>
      <p>Pellentesque commodo tellus quis bibendum pretium.</p>
      <p>
        Phasellus vestibulum sapien id orci varius, eu mattis quam vulputate.
      </p>
      <p>Cras et enim nec nulla vestibulum varius eget vitae orci.</p>
    </div>
  );
};

  const Engine = Matter.Engine;
  const Render = Matter.Render;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Mouse = Matter.Mouse;
  const MouseConstraint = Matter.MouseConstraint;

  const drawBody = Helpers.drawBody;
  const drawMouse = Helpers.drawMouse;

  let engine;
  let circleA;
  // let rect01;
  let rectbottom;
  let recttop;
  let rect02;
  let rect03;
  let rect04;
  let rect05;
  let rect06;
  let rect07;
  let rect08;
  let rect09;
  let rect10;
  let rect11


  let ground;
  let wall1;
  let wall2;

  function setup() {
    createCanvas(800, 800);
    noStroke();
    rectMode(CENTER);
    ellipseMode(CENTER);

    // create an engine
    engine = Engine.create();

    // create two boxes and a ground
    circleA = Bodies.circle(300, 185, 148);

    // rect01 = Bodies.rectangle(300, 208, 300, 313);

    rectbottom = Bodies.rectangle(300, 362, 140, 400, {
              chamfer: { radius: [5, 5, 3, 3] }});

    recttop = Bodies.rectangle(300, 362, 140, 110, {
              chamfer: { radius: [15, 15, 3, 3] }});

    rect02 = Bodies.rectangle(398, 70, 60, 70, {
              chamfer: { radius: [5, 5, 5, 5] }});
    rect03 = Bodies.rectangle(202, 70, 60, 70, {
              chamfer: { radius: [5, 5, 5, 5] }});

    rect04 = Bodies.rectangle(300, 114, 58, 90, {
              chamfer: { radius: [20, 20, 0, 0] }});

    rect05 = Bodies.rectangle(300, 119, 40, 78, {
              chamfer: { radius: [10, 10, 0, 0] }});

    rect06 = Bodies.rectangle(300, 116, 40, 70, {
              chamfer: { radius: [10, 10, 10, 10] }});

    rect07 = Bodies.rectangle(300, 140, 30, 8, {
              chamfer: { radius: [4, 4, 4, 4] }});
    rect08 = Bodies.rectangle(347, 132, 36, 34, {
              chamfer: { radius: [0, 7, 7, 0] }});

    rect09 = Bodies.rectangle(333, 132, 6, 33, {
              chamfer: { radius: [3, 3, 3, 3] }});
    rect10 = Bodies.rectangle(355, 132, 6, 33, {
              chamfer: { radius: [3, 3, 3, 3] }});

    rect11 = Bodies.rectangle(255, 104, 50, 2,);
    rect12 = Bodies.rectangle(345, 104, 50, 2,);



    ground = Bodies.rectangle(400, 800, 800, 10, {
      isStatic: true,
    });

    wall1 = Bodies.rectangle(1, 400, 10, 1600, {
      isStatic: true,
    });
    wall2 = Bodies.rectangle(799, 400, 10, 1600, {
      isStatic: true,
    });
    // add all of the bodies to the world
    World.add(engine.world, [ rectbottom,recttop, ground,wall1,wall2, circleA,rect02,rect03,
    rect04,rect05,rect06,rect07,rect08,rect09,rect10,rect11,rect12, ]);
    // setup mouse
    let mouse = Mouse.create(canvas.elt);
    let mouseParams = {
      mouse: mouse,
      constraint: { stiffness: 0.05, angularStiffness: 0 }
    }
    mouseConstraint = MouseConstraint.create(engine, mouseParams);
    mouseConstraint.mouse.pixelRatio = pixelDensity();
    World.add(engine.world, mouseConstraint);

    // run the engine
    Engine.run(engine);
  }

  function draw() {
    background(255);

    fill(152);
  drawMouse(mouseConstraint);
    drawBody(rectbottom);
    drawBody(recttop);
    drawBody(circleA);

    fill(50);
    drawBody(ground);
    drawBody(wall1);
    drawBody(wall2);
    drawBody(rect04);
    drawBody(rect07);
    drawBody(rect09);
    drawBody(rect10);

    fill(0);
    // drawBody(rect01);
    drawBody(rect02);
    drawBody(rect03);
    drawBody(rect11);
    drawBody(rect12);

    fill(100);
    drawBody(rect05);

    fill(200);
    drawBody(rect06);

    fill(70);
    drawBody(rect08);



  }

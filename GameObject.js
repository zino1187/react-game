class GameObject extends React.Component{
	constructor(props, src, x, y, width, height,velX, velY){
		super(props);
		this.src=src;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.velX=velX;
		this.velY=velY;
	}

	render(){
		this.x+=this.velX;
		this.y+=this.velY;

		this.css={
			position:"absolute",
			left:this.x+"px",
			top:this.y+"px",
			width:this.width+"px",
			height:this.height+"px"
		}
		
		return (
			<img src={this.src} style={this.css} />
		);
							
	}
}
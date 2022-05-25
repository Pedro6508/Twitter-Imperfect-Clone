let idStore = [];
const profileName = document.getElementById('profile_name');

function hover_effect( idSon,id, setBorder, color, defaultColor ){
    let element_son = document.getElementById( idSon );
    if( setBorder ){
        element_son.style.backgroundColor = color; 
    }
    else{
        element_son.style.color = color;
    }

    document.getElementById( id ).addEventListener( 'mouseout',
    function( event ) {
        if( setBorder ){ 
            element_son.style.backgroundColor = defaultColor;
        }
        else{
            element_son.style.color = defaultColor;
        }
    });

    console.log( idStore );
}

if( profileName.innerText.length >= 14 ){ // put in a function 
    profileName.replaceWith( profileName.innerText.substring( 0,14 ) , "..." );
}

function isLoaded( imageObject ){
    return imageObject.complete && imageObject.naturalHeight !== 0;
}

function TakeMainColor( imgId, boxId ){
    let canvas = document.createElement( 'canvas' ).getContext( '2d' );
    let img = document.getElementById( imgId );

    console.log( img );
    console.log( isLoaded( img ) );
    if ( isLoaded === false ){
        let image = img; 
        img =  image;

        console.log( isLoaded( img ) )
    }

    canvas.imageSmoothingEnabled = true;
    canvas.drawImage( img, 0, 0, 1, 1 );

    let color = canvas.getImageData( 0, 0, 1, 1 ).data
    color = `rgba(${color[0]},${color[1]},${color[2]},${ color[3] })`;
    console.log( color );
    document.getElementById( boxId ).style.backgroundColor = color;
}


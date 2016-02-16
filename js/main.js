;(function( window ){
	
	var factory 			= (function( $type ){

		var private 		= $type;

		function echo(){
			console.log( 'I\'m a ' + private + ' factory' );
		}

		return {
			echo : echo
		}

	})();


	var carFactory 			= factory( 'car' );
	carFactory.echo();


})( window || {} );
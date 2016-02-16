module.exports 	= function( $type ){

	var private 		= $type;

	function echo(){
		return 'I\'m a ' + private + ' factory';
	}

	return {
		echo : echo
	}
};

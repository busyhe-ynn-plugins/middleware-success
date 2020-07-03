module.exports = ( prop = 'success', base ) => {
    return async ( ctx, next ) => {
        ctx[ prop ] = async data => {
            data = await data;
            if( !base ) {
                base = {
                    status : 0,
                    message : 'success'
                };
            }
            return Object.assign( {}, base, data || {} );
        };

        return next();
    }
}

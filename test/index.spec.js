const Ynn = require( 'ynn' );
const success = require( '../src' );

async function create() {
    const app = new Ynn( {
        root : __dirname,
        debugging : Ynn.DEBUGGING_DANGER,
        logging : false
    } );
    app.use( success( ...arguments ) );
    return app;
}

describe( 'ynn-middleware-success', () => {

    it( 'success', async () => {
        const app = await create();
        app.use( ctx => {
            ctx.body = ctx.success();
        } );
        const res = await app.sham( '/' );

        expect( res ).toEqual( {
            status : 0,
            message : 'success'
        } );
    } );

    it( 'with data', async () => {
        const app = await create();
        app.use( ctx => {
            ctx.body = ctx.success( {
                x : 1
            } );
        } );
        const res = await app.sham( '/' );

        expect( res ).toEqual( {
            status : 0,
            message : 'success',
            x : 1
        } );
    } );

    it( 'with arguments', async () => {
        const app = await create( 'ok', { ok : true } );
        app.use( ctx => {
            ctx.body = ctx.ok( {
                x : 1
            } );
        } );
        const res = await app.sham( '/' );

        expect( res ).toEqual( {
            ok : true,
            x : 1
        } );
    } );

} );

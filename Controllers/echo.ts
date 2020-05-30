const echoRequest = async (
    { params, request, response }: {
        params: { status: string };
        request: any
        response: any
    }
) => {
    const body = await request.body();

    response.status = parseInt(params.status);
    response.body = body.value;
}

export { echoRequest };
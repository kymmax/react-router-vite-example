/* global __APP_ENV__ */

function EnvParameter(){
    return (
        <>
            {`EnvParameter: ${import.meta.env.VITE_BASE_URL}`}
            <hr />
            {`ViteConfigDefineParameter: ${__APP_ENV__}`}
        </>
    )
}

export default EnvParameter;
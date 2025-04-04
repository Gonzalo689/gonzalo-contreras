export async function getVoiceflowConfig() {
    const http = "https://portafolio-dvhu.vercel.app/";

    try {
        const response = await fetch(http + "vf-config");
        if (response.ok) {
            const config = await response.json();
            return config;  // Devuelve la configuración de Voiceflow
        } else {
            console.error("Error al obtener la configuración de Voiceflow.");
            return null;
        }
    } catch (error) {
        console.error("Error al hacer la solicitud:", error);
        return null;
    }
}
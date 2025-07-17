"use server"

export async function validateAction ( previousState: any, formData: FormData) {
    const username=  formData.get("username") as string;
    return {
        status: true,
        message: username
    }

}
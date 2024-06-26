'use server';
import { redirect } from "next/navigation";
import prisma from "./db";
import { revalidatePath } from 'next/cache';
export const getAllAdd = async () => {

    return await prisma.Placeadd.findMany({
        orderBy: {

            createdAt: 'desc',
        },

    })
}
export const CreateAdd = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const title = formData.get('title');
    const description = formData.get('description');
    const imageLink = formData.get('imageLink');
    await prisma.Placeadd.create({

        data: {
            title,
            description,
            imageLink,
        }

    })
    revalidatePath('/adds')
    return { message: 'sucess!!!' }
}
export const getAdd = async (id) => {

    return prisma.Placeadd.findUnique({

        where: {

            id,
        }
    })


}
export const DeleteAdd = async (formData) => {

    const id = formData.get('id');

    await prisma.Placeadd.delete({
        where: { id }

    })
    revalidatePath('/adds')



}
export const editPlaceAdd = async (formData) => {
    const id = formData.get('id');
    const title = formData.get('title');
    const description = formData.get('description');
    await prisma.Placeadd.update({
        where: {
            id
        },
        data: {
            title,
            description
        }

    })
    redirect('/adds')
}
'use server';
import { redirect } from "next/navigation";
import prisma from "./db";
import { z } from 'zod';

import { revalidatePath } from 'next/cache';
export const getAllTasks = async () => {

    return await prisma.task.findMany({
        orderBy: {

            createdAt: 'desc',
        },
    });
};
export const CreateTask = async (prevState, formData) => {

    const content = formData.get('content');
    // console.log(content);

    await prisma.task.create({

        data: {

            content,
        }

    })
    revalidatePath('/task')

    return { message: 'sucess!!!' }



}
export const CreateTaskCustom = async (prevState, formData) => {

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const content = formData.get('content');
    const Task = z.object({

        content: z.string().min(5)
    })
    // console.log(content);
    try {
        Task.parse({ content });
        await prisma.task.create({

            data: {

                content,
            }

        })
        revalidatePath('/task')

        return {
            message: 'success'
        }
    }
    catch (error) {
        console.log(error)
        return {
            message: 'error'
        }

    }
}
export const DeleteTask = async (formData) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const id = formData.get('id');
    

    await prisma.task.delete({
        where: { id }

    })
    revalidatePath('/task')
}
export const getTask = async (id) => {

    return prisma.task.findUnique({

        where: {
            id,
        }
    })


}
export const editTask = async (formData) => {

    const id = formData.get('id');
    const content = formData.get('content');
    const completed = formData.get('completed');
    await prisma.task.update({

        where: {

            id,
        },
        data: {
            content,
            completed: completed === 'on' ? true : false,

        }
    });
    redirect('/task')


}


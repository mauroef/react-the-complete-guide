'use server';

export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    image: formData.get('image'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  console.log({ meal });
}

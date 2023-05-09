import {useEffect, useState} from 'react'
import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({handleSubmit, btnText, projectData}){

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories",{
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        //handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e){
            setProject({ ...project, category: {
            id: e.target .value,
            name: e.target.options[e.target.selectedIndex]
            }
        })
    }
    

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="Nome do Projeto" name="name" handleOnChange={handleChange} placeholder="Insira o nome do projeto"/>

            <Input type="number" text="Orçamento" name="bugdet" handleOnChange={handleChange} placeholder="Insira o orçamento total"/>

            <div>
                <Select name="category_id" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''} text="Selecione a Categoria"/>
            </div>

            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm
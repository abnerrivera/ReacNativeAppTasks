//react
import { useEffect, useState } from 'react';
//ui
import { StyleSheet, View, } from 'react-native';

//data
import { getTasks } from "../Api";
import Layout from '../components/Layout';
import TaskList from '../components/TaskList';

export default function HomeScreen() {

  const [data, setData] = useState([]);

  //get api
  const loadTasks = async () => {
    const response = await getTasks();
    setData(response);
  };

  useEffect(() => {
    loadTasks();
  }, [])

  return (
    <Layout>
      <TaskList
        data={data}
      />
    </Layout>
  );
}

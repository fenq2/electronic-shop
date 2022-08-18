import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';

import styles from './Categories.module.scss';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);

  const instance = axios.create({
    baseURL: 'http://localhost:1234',
  });

  useEffect(() => {
    const getCategories = async () => {
      const categories: any = (await instance.get('/api/category'))?.data;

      setCategories(categories);
    };

    getCategories();
  }, []);

  return (
    <Nav>
      {categories?.map((category) => (
        <Nav.Item key={category?._id} className={styles.navItem}>
          <Link href="/">
            <a className={styles.navLink}>{category?.name}</a>
          </Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Categories;

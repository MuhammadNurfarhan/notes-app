/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import NotesList from '../components/NotesList';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

function HomePage() {
  return (
    <PageLayout>
      <Container>
        <Link to='/add'>
          <Button>Add New Note</Button>
        </Link>
        <NotesList />
      </Container>
    </PageLayout>
  );
}

export default HomePage;
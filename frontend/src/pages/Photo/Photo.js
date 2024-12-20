import './Photo.css'

import { uploads } from '../../utils/config';

//Components
import Message from "../../components/Message";
import { Link } from 'react-router-dom';
import PhotoItem from '../../components/PhotoItem';

// Hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// Redux
import { getPhoto } from '../../slices/photoSlice';

function Photo() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector((state) => state.photo);

  // comentários

  // Load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  // like e comentário

  if (loading) {
    return <p>carregando...</p>
  }

  return (
    <div id="photo">
      <PhotoItem photo={photo} />
    </div>
  )
}

export default Photo

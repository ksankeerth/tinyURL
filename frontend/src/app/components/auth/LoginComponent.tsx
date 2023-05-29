import { Box, Card, CardContent, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import RoundedButton from '../common/RoundedButton';
import { loginUser } from './../../state/auth/action';
import { AuthState } from './../../state/auth/state';
import { AppDispatch, RootState } from './../../state/store';
import { FormFieldErrors } from './../../types/index';

export default function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [inputErrors, setInputErrors] = useState<FormFieldErrors>({} as FormFieldErrors);

  const dispatch: AppDispatch = useDispatch();

  const { authenticated, error } = useSelector<RootState, AuthState>(state => (state.auth));

  const handleLogin: MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    // do validation
    const validationErrors: FormFieldErrors = {
      ...inputErrors,
    };

    let validationFailed = false;
    if (!username) {
      validationErrors.username = {
        state: true,
        message: 'Enter valid Username.',
      };
      validationFailed = true;
    }

    if (!password) {
      validationErrors.username = {
        state: true,
        message: 'Enter storng password.',
      };
      validationFailed = true;
      // TODO : handle more scenarios
    }
    if (validationFailed) {
      setInputErrors(validationErrors);
      return;
    }

    dispatch(loginUser({ username, password }));
  };

  useEffect(() => {
    if (error) {
      // eslint-disable-next-line no-alert
      alert(error);
    }
  }, [authenticated, error]);

  return (
    <Card elevation={0} className="border-radius-20">
      <CardContent>
        <Grid container>
          <Grid item xs={12}>Login with google</Grid>
          <Divider />
          <Grid item xs={12}>
            <form>
              <Box p={1}>
                <TextField
                  required
                  fullWidth
                  size="small"
                  label="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </Box>
              <Box p={1}>
                <TextField
                  required
                  fullWidth
                  size="small"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <Link to="/reset"><Typography variant="body2" textAlign="right">Forgot Password?</Typography></Link>
              </Box>
              <Box p={1}>
                <RoundedButton
                  onClick={handleLogin}
                  fullWidth
                  size="small"
                >
                  Login
                </RoundedButton>
                <br />
                <Link to="/signup"><Typography variant="body2" textAlign="right">Don&apos;t you have an account?</Typography></Link>
              </Box>
            </form>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

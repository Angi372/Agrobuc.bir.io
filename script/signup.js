import React, { useState } from 'react';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérification des mots de passe
        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        // Logique d'inscription
        const user = {
            username: username,
            email: email,
            password: password,
        };

        // Vous pouvez envoyer les données de l'utilisateur à votre API backend ici
        console.log("Nouvel utilisateur inscrit : ", user);

        // Réinitialiser le formulaire
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    return (
        <div className="signup">
            <h2>Créer un Compte</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirmer le mot de passe"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <input type="submit" value="S'inscrire" />
            </form>
            <p>Vous avez déjà un compte ? <a href="/login">Connectez-vous ici</a>.</p>
        </div>
    );
}

export default Signup;
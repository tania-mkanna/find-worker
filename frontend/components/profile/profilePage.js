import { useEffect, useState } from "react";

export default function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (!savedUser) {
            window.location.href = "/"; // redirect if not logged in
            return;
        }

        // Fetch updated profile from backend
        fetch(`http://localhost:8080/api/auth/profile/${savedUser.id}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    const handleUpdate = async () => {
        const res = await fetch(`http://localhost:8080/api/auth/update-profile/${user.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        if (res.ok) {
            alert("Profile updated!");
        }
    };

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h1>Profile</h1>
            <input
                value={user.fullName}
                onChange={(e) => setUser({...user, fullName: e.target.value})}
            />
            <input
                value={user.phone}
                onChange={(e) => setUser({...user, phone: e.target.value})}
            />
            <input
                value={user.address}
                onChange={(e) => setUser({...user, address: e.target.value})}
            />
            <button onClick={handleUpdate}>Save</button>
        </div>
    );
}

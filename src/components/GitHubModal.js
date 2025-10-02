import React from "react";
import { Button, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function GitHubModal({ data, loading, error, onClose }) {
  const navigate = useNavigate();

  // close by calling onClose if provided (state-controlled), otherwise navigate to home
  const handleClose = () => {
    if (onClose) return onClose();
    navigate("/");
  };

  return (
    <div className="modal-page-backdrop" onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div className="modal-card">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between px-3 px-md-4 py-3 border-bottom modal-header">
          <h5 className="mb-0">Mon profil GitHub</h5>
          <button className="modal-close" aria-label="Fermer" onClick={handleClose}>
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-3 px-md-4 py-4">
          {loading && (
            <div className="text-center py-5">
              <Spinner animation="border" />
              <div className="mt-3">Chargement…</div>
            </div>
          )}

          {!loading && error && (
            <div className="text-danger">Impossible de charger le profil GitHub.</div>
          )}

          {!loading && !error && data && (
            <Row className="g-4">
              <Col md={6} className="text-center">
                <img
                  className="modal-img"
                  src={data.avatar_url}
                  alt={data.login}
                />
              </Col>

              <Col md={6}>
                <div className="list-row">
                  <i className="bi bi-person" />
                  <a
                    href={data.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-light text-decoration-underline"
                  >
                    {data.name || data.login}
                  </a>
                </div>

                <div className="list-row">
                  <i className="bi bi-geo-alt" />
                  <span>{data.location || "—"}</span>
                </div>

                {data.bio && (
                  <div className="list-row">
                    <i className="bi bi-card-text" />
                    <span>{data.bio}</span>
                  </div>
                )}

                <div className="list-row">
                  <i className="bi bi-box" />
                  <span>Repositories : {data.public_repos}</span>
                </div>

                <div className="list-row">
                  <i className="bi bi-people" />
                  <span>Followers : {data.followers}</span>
                </div>

                <div className="list-row">
                  <i className="bi bi-person-plus" />
                  <span>Following : {data.following}</span>
                </div>
              </Col>
            </Row>
          )}
        </div>

        {/* Footer */}
        <div className="d-flex justify-content-end gap-2 px-3 px-md-4 py-3 border-top modal-footer">
          <Button variant="secondary" onClick={handleClose}>Fermer</Button>
        </div>
      </div>
    </div>
  );
}

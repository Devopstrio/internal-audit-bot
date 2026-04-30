from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, audits, controls, compliance, reports, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(audits.router, prefix="/audits", tags=["audits"])
api_router.include_router(controls.router, prefix="/controls", tags=["controls"])
api_router.include_router(compliance.router, prefix="/compliance", tags=["compliance"])
api_router.include_router(reports.router, prefix="/reports", tags=["reports"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])

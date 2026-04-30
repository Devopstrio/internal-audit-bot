from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_audits():
    return {'status': 'ok'}
